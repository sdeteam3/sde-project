pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        git(url: 'https://github.com/sdeteam3/sde-project', branch: 'main', poll: true)
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
  tools {
    nodejs 'test'
  }
}