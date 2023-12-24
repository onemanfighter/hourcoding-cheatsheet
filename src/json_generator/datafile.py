import json
from method import create_folder_structure_json2

folder_path = '/Users/mr.robot/Desktop/HourCoding.com/hourcoding-cheatsheet/src/data/md'  

# Call the function to create the JSON representation 
folder_json = create_folder_structure_json2(folder_path)
  
# Convert the dictionary to a JSON string with indentation 
folder_json_str = json.dumps(folder_json, indent=4)   
  
# Specify the path to the output file  
output_file_having_all_file = '/Users/mr.robot/Desktop/HourCoding.com/hourcoding-cheatsheet/src/data/json/datafile.json' 
  

# Save the JSON representation of a folder structure 
with open(output_file_having_all_file, 'w') as f: 
  # Write the JSON string to the file 
    f.write(folder_json_str)   
  
# Print a confirmation message with the output file path 
print("JSON saved to 2", output_file_having_all_file)


