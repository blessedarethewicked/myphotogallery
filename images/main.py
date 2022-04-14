from os import walk
import json
filenames = next(walk("C:/Users/blessing/projects/react/online-photo-gallery/gallery/public/images"), (None, None, []))[2]  # [] if no file


gallery = {}
for x in range(0, len(filenames)-1):
    key_name = "image"+str(x)
    gallery[key_name] = filenames[x]

jsonString = json.dumps(gallery)
# Using a JSON string
with open('json_data.json', 'w') as outfile:
    outfile.write(jsonString)