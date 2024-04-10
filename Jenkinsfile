def BUILD_CMD
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM',
                          branches: [[name: '*/master']],
                          doGenerateSubmoduleConfigurations: false,
                          extensions: [],
                          submoduleCfg: [],
                          userRemoteConfigs: [[url: 'https://github.com/sanjaypakale/my-react-app.git']]])
            }
        }

        stage('Read Properties') {
            steps {
                script {
                    bat 'echo Current Directory: %CD%'
                    echo 'Begin reading properties file'
                    // Define the path to your properties file
                    def propertiesFilePath = 'jenkins-properties.properties'

                    // Read properties from the file
                    def properties = readProperties(file: propertiesFilePath)

                    // Access individual properties
                    BUILD_CMD = properties.getProperty('BUILD_CMD')

                    // Print the properties (optional)
                    echo "Property 1: ${BUILD_CMD}"

                // You can use the properties in your build steps
                // For example:
                // sh "echo ${property1} > output.txt"
                }
            }
        }

        stage('Build') {
            steps {
                echo 'Build stage goes here'
            }
        }

    // Add more stages as needed
    }

// Add post-build actions if needed
}
