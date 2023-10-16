pipeline {
    agent any
    tools {
        nodejs 'test'
    }
    stages {
        stage('Build') {
            steps {
                git(url: 'https://github.com/TheBigFatBear/deployment.git', branch: 'main', poll: true)
                build 'build'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deployment') {
            steps {
                sh 'npm start'
            }
        }
    }
}
