/* groovylint-disable-next-line CompileStatic */
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
                    echo 'Begin reading properties file'
                    // Define the path to your properties file
                    def propertiesFilePath = 'jenkins-properties.properties'

                    // Read properties from the file
                    def properties = readProperties file: propertiesFilePath

                    // Access individual properties
                    BUILD_CMD = properties['BUILD_CMD']

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
                echo 'Running build command'
                //bat "${BUILD_CMD}"
            }
        }
        stage('Clean Workspace') {
            steps {
                echo "Cleaning workspace..."
                deleteDir()
                echo "Workspace cleaned up..s"
            }
        }
   stage('Notification') {
            steps {
                emailext(
                    subject: "Build Notification",
                    body: "The build has completed.",
                    to: "sanjaypakale@gmail.com",
                    mimeType: 'text/html',
                    replyTo: "sanjaypakale@gmail.com",
                    attachLog: true,
                    from: "sanjaypakale@gmail.com"
                )
            }
        }
    }

// Add post-build actions if needed
}
