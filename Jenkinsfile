pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        build 'sde-project'
      }
    }

    stage('Test') {
      steps {
        sh '''#!/bin/bash
git clone \'https://github.com/sdeteam3/sde-project\'
cd sde-project/src
npm install
npm test
a'''
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