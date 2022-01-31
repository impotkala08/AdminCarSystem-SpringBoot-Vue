// pipeline {
    
//     agent any 
 
//     stages {
 
//         stage('Init'){
//             bat npm install
//         }
 
//         stage('Yarn Build') {
//             bat npm run build
//         }
 
//         stage('Deploy') {
//             bat npm firebase deploy --token '1//0gd_UNeaAcGCMCgYIARAAGBASNwF-L9Ir-TW5p-LSIyxCWGYoZme0XXWXS5GJ8VaZ8bKHFDVV4u-jdtT_6xCTEBMReErhp4raKCc'
//         }
//     }

    
// }

pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Init') {
            steps {
                bat 'npm install --save'
                bat 'npm install --save axios'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                bat 'firebase deploy --token 1//0gd_UNeaAcGCMCgYIARAAGBASNwF-L9Ir-TW5p-LSIyxCWGYoZme0XXWXS5GJ8VaZ8bKHFDVV4u-jdtT_6xCTEBMReErhp4raKCc'
            }
        }
}
}


