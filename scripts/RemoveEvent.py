import os

comiketDir = "content/comiket"
eventId = 'mkb4XfKk_'
itemFiles = []
for filename in os.listdir(comiketDir):
  if(filename.endswith(".md")):
    file = open(comiketDir+"/"+filename, encoding='utf-8')
    fileBuffer = file.read()
    if eventId in fileBuffer:
      print(fileBuffer)
# f = open("content/comiket/s-_4ylpuyyc.md", "r")
# print(f.read())