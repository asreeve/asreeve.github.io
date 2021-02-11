
infile = '06_logic_if.html'
outfile = '06_logic_if_v4.html'

flag = False

old_strings=[
    '<script src="../reveal.js/dist/reveal.js"></script>\n',
    'plugins: [RevealHighlight],\n',]

new_strings=[
    '''
    <script src="../reveal.js/dist/reveal.js"></script>
    <script src="../reveal.js/plugin/audio-slideshow/plugin.js"></script>
    <script src="../reveal.js/plugin/menu/menu.js"></script>
    ''',
    "plugins: [ RevealAudioSlideshow, RevealMenu, RevealHighlight],\n"
    ]

with open(infile) as fo:
    textfile=fo.readlines()
    for i,ln in enumerate(textfile):
        if (flag==False):
            if ln == old_strings[0]:
                textfile[i]=ln.replace(ln,new_strings[0])
                flag=True
        else:
            if ln == old_strings[1]:
                textfile[i]=ln.replace(ln,new_strings[1])
            
with open(outfile, 'wt') as fo:
    for line in textfile:
        fo.write(line)
    
