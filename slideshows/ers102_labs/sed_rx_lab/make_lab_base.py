from pathlib import Path
from shutil import copyfile
import fitz

class make_base:
    '''
    functions to:
     + create folder and subfolders for reveal.js slideshow
     + copy over original pdf file to a working directory
     +  splits into seperate png files
     + creates basic reveal.js org-mode file, and a seperate org file to put notes in for talking points and other items

    Input:
     + 'pdf_file' name of old pdf file
     + 'topic' name used to name new files
    '''
    def __init__(self,base_path='./', pdf_file='SedRx_beamer.pdf',topic='SedRx_Lab'):
        self.lect_path=Path('./slides')
        self.topic=topic 
        self.pdf_file=pdf_file
        self.base_path=Path(base_path)
        self.dummy_audio='#+REVEAL_HTML: <p class ="fragment" data-audio-src="audio/SolveThePuzzle.ogg">\n \n'
        self.background1='  :PROPERTIES:\n  :reveal_background_size: 1100px\n'  
        self.background2='  :reveal_background_trans: slide\n  :END:\n \n'
        self.new_dirs=['audio','slides','video']
        self.source=self.lect_path.joinpath(self.pdf_file)
        
    def create_folders(self):
        # create new directories, make sure not to overwrite old dirs
        for fldr in self.new_dirs:
            new_fldr=Path(fldr)
            try:
                new_fldr.mkdir(parents=True, exist_ok=False)
            except FileExistsError:
                pass

    def move_pdf(self):
        # move pdf file to slides folder
        dest=self.topic.joinpath('slides',self.pdf_file)
        copyfile(self.source, dest)

    def split_pdf(self,):
        # split pdf pages into seperate png images
        dest=self.base_path.joinpath('slides',self.pdf_file)
        pdf_obj=fitz.open(dest)
        self.slide_titles=[]
        slide_base=self.pdf_file.split('.')[0]
        for i,page in enumerate(pdf_obj): 
            self.slide_titles.append(page.getText('blocks')[0][4])
            png=page.getPixmap(matrix=[2,0,0,2,0,0])
            png.pillowWrite(f"./slides/{slide_base}_{i:03}.png",dpi=(200,200))
        pdf_obj.close()

    def make_org(self):
        '''
        make org files
        * one for reveal.js slideshow
        * one for writing note/talking points
        '''
        dest=self.base_path.joinpath('slides')
        png_slides=['/'.join(('slides',i.stem+'.png')) for i in dest.glob('*.png')]
        png_slides.sort()

        ## reveal.js file
        new_name1=f'./{self.topic}.org'
        new_file1=open(new_name1,'w')
        ## notes file for talking points
        new_name2=f'./slides/{self.topic}_notes.org'
        new_file2=open(new_name2,'w')

        with open('reveal_lab_base.org') as fo:
            for i,ln in enumerate(fo):
                if i<13:
                    new_file1.write(ln)
        for h1,slide in zip(self.slide_titles,png_slides):
            new_file1.write(f'* {h1}\n')
            new_file1.write(self.background1)
            new_file1.write(f'  :reveal_background: {slide}\n')
            new_file1.write(self.background2)
            new_file1.write(self.dummy_audio)
            new_file2.write(f'* {h1}\n')

        new_file1.close()
        new_file2.close()        

    def do_all(self):
        #self.create_folders()
        #self.move_pdf()
        self.split_pdf()
        self.make_org()

if __name__=='__main__':
    mf=make_base()
    print(mf.pdf_file)
