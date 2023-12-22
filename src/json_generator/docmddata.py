import json
from method import create_folder_structure_json1

# Specify the path to the folder you want to create the JSON for 
folder_path = '/Users/mr.robot/Desktop/HourCoding.com/hourcoding-cheatsheet/src/data/doc_md'  
  
# Call the function to create the JSON representation 
folder_json = create_folder_structure_json1(folder_path)  
  
# Convert the dictionary to a JSON string with indentation 
folder_json_str = json.dumps(folder_json, indent=4)   
  
# Specify the path to the output file 
output_file_having_everything = '/Users/mr.robot/Desktop/HourCoding.com/hourcoding-cheatsheet/src/data/json/DocMdData.json'   

# Save the JSON representation of a folder structure 
with open(output_file_having_everything, 'w') as f: 
  # Write the JSON string to the file 
    f.write(folder_json_str)   
  
# Print a confirmation message with the output file path 
print("JSON saved to 1", output_file_having_everything)