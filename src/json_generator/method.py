import os 
import re 

"""Reads the metadata from a README file.

  Args:
    filename: The path to the README file.

  Returns:
    A dictionary of the metadata.
"""
def read_metadata(filename):
  metadata = {}
  with open(filename, "r") as f:
    for line in f:
      match = re.match(r"^\s*(\w+)\:\s*(.*?)\s*$", line)
      if match:
        metadata[match.group(1)] = match.group(2)
  return metadata

def create_folder_structure_json1(path): 
	# Initialize the result dictionary with folder 
	# name, type, and an empty list for children 
	result = {'name': os.path.basename(path), 
			'type': 'folder', 'children': []} 

	# Check if the path is a directory 
	if not os.path.isdir(path): 
		return result 

	# Iterate over the entries in the directory 
	for entry in os.listdir(path): 
	# Create the full path for the current entry 
		entry_path = os.path.join(path, entry) 

		# If the entry is a directory, recursively call the function 
		if os.path.isdir(entry_path): 
			result['children'].append(create_folder_structure_json1(entry_path)) 
		# If the entry is a file, create a dictionary with name and type 
		else: 
			result['children'].append({'name': entry, 'title': read_metadata(entry_path)['title'] }) 

	return result 

def create_folder_structure_json2(path): 
	# Initialize the result dictionary with folder 
	# name, type, and an empty list for children 
	result = []

	# Check if the path is a directory 
	if not os.path.isdir(path): 
		return result 

	# Iterate over the entries in the directory 
	for entry in os.listdir(path): 
	# Create the full path for the current entry 
		entry_path = os.path.join(path, entry) 

		# If the entry is a directory, recursively call the function 
		if os.path.isdir(entry_path): 
			result = result +create_folder_structure_json2(entry_path)
		# If the entry is a file, create a dictionary with name and type 
		else: 
			result.append({'name': entry, 'path': entry_path, 'metadata': read_metadata(entry_path) })
			
	return result 



def changeExtensionFromHtmlToMd(folder_path): 
	for filename in os.listdir(folder_path):
		infilename = os.path.join(folder_path,filename)
		if not os.path.isfile(infilename): continue
		oldbase = os.path.splitext(filename)
		newname = infilename.replace('.html', '.md')
		output = os.rename(infilename, newname)

