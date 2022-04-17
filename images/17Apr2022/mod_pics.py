from wand.image import Image, COMPOSITE_OPERATORS
from wand.drawing import Drawing
from wand.display import display
from pathlib import Path

save_path = Path("./")
filepaths = [i for i in Path.iterdir(Path("./"))]
watermark = Image(filename="../watermark.png")
prefixes = [".py", ".py~"]
for original in filepaths:
    print(original)
    if (original.suffix in prefixes) or ("_sm" in original.stem):
        continue
    print(original)
    new_file = save_path.joinpath(f"{original.stem}_sm{original.suffix}")
    pic = Image(filename=original)
    pic.transform(resize="500000@")

    draw = Drawing()
    draw.composite(
        operator="plus", left=10, top=10, width=208, height=35, image=watermark
    )
    draw(pic)
    pic.save(filename=new_file)
