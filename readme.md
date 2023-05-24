# Flutterflow Firebase Firestore List<any> Importer

This Node.js code allows you to import data from a CSV file into a Firestore collection using the Firebase Admin SDK. It's designed to be open source and reusable, allowing other users to integrate this functionality into their projects easily.

## Prerequisites

- Node.js: Make sure you have Node.js installed on your system.
- Firebase Admin SDK: You'll need to set up a Firebase project and generate a service account key to authenticate with the Firebase Admin SDK. Refer to the [Firebase documentation](https://firebase.google.com/docs/admin/setup) for instructions on setting up the Admin SDK and obtaining the service account key.

## Getting Started

1. Clone the repository and navigate to the project directory.

2. Install dependencies by running the following command:
   ```shell
   npm install
   ```

3. Configure the project:
   - Edit the `config.json` file in the project root directory.
   - Fill in the necessary configuration values in the `config.json` file. The configuration should include the following fields:
     - `serviceAccountKey`: The path to your Firebase service account key JSON file.
     - `docID`: The document ID in the Firestore collection where you want to store the imported data.
     - `csvFilePath`: The path to the CSV file containing the data to be imported.
     - `collection`: The name of the Firestore collection to which the data will be imported.
     - `FieldToUpdate`: The name of the field in the Firestore document where the imported data will be stored.

4. Run the code:
   ```shell
   node index.js
   ```

   The code will read the CSV file specified in the `config.json` file, extract the data, and upload it to the specified Firestore collection and document.

## Important Note

Ensure that you have properly secured your `config.json` file and any sensitive information, such as the Firebase service account key. Avoid committing sensitive information to version control systems.
   
Also ensure the CSV file is in this format:
<img width="166" alt="Screenshot 2023-05-24 at 1 48 06 PM" src="https://github.com/Anjie167/FlutterFlow_List_Importer/assets/92726417/209e9811-be5e-4d43-be23-331792586770">
   
   
   
   
  
   
where `data` should be left as is 
      `data 1 - data n` are the variables to be stored

Feel free to modify and customize the code to suit your specific requirements and use cases.

Please refer to the [Firebase documentation](https://firebase.google.com/docs/firestore) for more information on Firestore and the Firebase Admin SDK.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvement, please feel free to submit a pull request or open an issue in the project repository.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute the code in accordance with the terms of the license.
