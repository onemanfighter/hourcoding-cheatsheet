import os 
import re
import json 

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


# Specify the path to the folder you want to create the JSON for 
folder_path = '/Users/mr.robot/Desktop/HourCoding.com/hourcoding-cheatsheet-a/src/data/md'  
  
# Call the function to create the JSON representation 
folder_json = create_folder_structure_json1(folder_path)  
  
# Convert the dictionary to a JSON string with indentation 
folder_json_str = json.dumps(folder_json, indent=4)   
  
# Specify the path to the output file 
output_file_having_everything = '/Users/mr.robot/Desktop/HourCoding.com/hourcoding-cheatsheet-a/src/data/json/data.json'   

# Save the JSON representation of a folder structure 
with open(output_file_having_everything, 'w') as f: 
  # Write the JSON string to the file 
    f.write(folder_json_str)   
  
# Print a confirmation message with the output file path 
print("JSON saved to 1", output_file_having_everything)


# Call the function to create the JSON representation 
folder_json = create_folder_structure_json2(folder_path)
  
# Convert the dictionary to a JSON string with indentation 
folder_json_str = json.dumps(folder_json, indent=4)   
  
# Specify the path to the output file  
output_file_having_all_file = '/Users/mr.robot/Desktop/HourCoding.com/hourcoding-cheatsheet-a/src/data/json/datafile.json' 
  

# Save the JSON representation of a folder structure 
with open(output_file_having_all_file, 'w') as f: 
  # Write the JSON string to the file 
    f.write(folder_json_str)   
  
# Print a confirmation message with the output file path 
print("JSON saved to 2", output_file_having_all_file)


