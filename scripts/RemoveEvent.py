import os

comiketDir = "content/comiket"
eventId = 'mkb4XfKk_'
itemFiles = []

itemsToDelete = {}

for filename in os.listdir(comiketDir):
  if(filename.endswith(".md")):
    imageToDelete = ""
    filePath = comiketDir+"/"+filename
    file = open(filePath, encoding='utf-8')
    fileBuffer = file.read()
    if eventId in fileBuffer:
      lines = fileBuffer.split("\n")
      for line in lines:
        kvp = line.split(" ")
        if kvp[0] == 'image:':
          itemsToDelete[filePath] = kvp[1]

for key in itemsToDelete:
  # os.remove(key)
  print(key, itemsToDelete[key])