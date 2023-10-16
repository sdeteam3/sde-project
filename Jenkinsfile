pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        build 'build'
      }
    }

    stage('Test') {
      steps {
        sh '''#!/bin/bash
git clone \'https://github.com/sdeteam3/sde-project\'
cd sde-project/src
npm install
npm test
'''
      }
    }

    stage('Deploy') {
      steps {
        sh '''#!/bin/bash
send to production server'''
      }
    }

  }
}