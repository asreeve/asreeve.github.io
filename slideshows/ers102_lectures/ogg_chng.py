from pathlib import Path
import subprocess
import shutil

def convert_file(in_file, out_file):
     conv_cmd = ['ffmpeg', '-i', in_file, '-c:a', 'libvorbis',
                 '-ar', '22050', '-ab', '32k', out_file]
     proc = subprocess.run(conv_cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
     

slidename='igneous_rx'
file_folder = Path.cwd()/slidename/'audio'
new_folder = file_folder/'backup'
if new_folder.exists():
    print('backup folder exists')
    files_to_conv=[i.name for i in new_folder.iterdir() if str(i).endswith('ogg')]
    for in_file in files_to_conv:
         print(f'converting {in_file}')
         original = file_folder/in_file
         target = new_folder/in_file
         print(original)
         print(target)
         convert_file(target,original)
elif not new_folder.exists():
    new_folder.mkdir()
    files_to_conv=[i.name for i in file_folder.iterdir() if str(i).endswith('ogg')]
    for in_file in files_to_conv:
        print(f'converting {in_file}')
        original = file_folder/in_file
        target = new_folder/in_file
        print(original)
        print(target)
        shutil.move(original,target)
        convert_file(target,original)
