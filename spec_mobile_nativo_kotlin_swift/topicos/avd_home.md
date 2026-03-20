ANDROID_AVD_HOME
%USERPROFILE%\.android\avd

#%USERPROFILE%\AppData\Local\Android\Sdk\.android\avd

ANDROID_HOME
%USERPROFILE%\AppData\Local\Android\Sdk\

ANDROID_SDK_HOME
%USERPROFILE%\AppData\Local\Android\Sdk\

ANDROID_SDK_ROOT
%USERPROFILE%\AppData\Local\Android\Sdk\

GRADLE_USER_HOME
%USERPROFILE%\.gradle

PATH

%JAVA_HOME%\bin
%ANDROID_HOME%\tools
%ANDROID_HOME%\platform-tools




JAVA_HOME

C:\Java\jdk-17

C:\Users\rlp\AppData\Local\Programs\Android Studio\jbr

%USERPROFILE%\AppData\Local\Programs\Android Studio\jbr



Multiple Gradle daemons might be spawned because the Gradle JDK and JAVA_HOME locations are different. Project 'My Application' is using the following JDK location when running Gradle: 'C:\Users\rlp\AppData\Local\Programs\Android Studio\jbr' The system environment variable JAVA_HOME is: 'C:\Java\jdk-17' If you dont need to use different paths (or if JAVA_HOME is undefined), you can avoid spawning multiple daemons by setting JAVA_HOME and the JDK location to the same path.


Cache do Gradle
%USERPROFILE%\.gradle
Projetos do Android Studio
%USERPROFILE%\AndroidStudioProjects

SDK do Android
%USERPROFILE%\AppData\Local\Android\SDK

https://developer.android.com/studio/intro/studio-config?hl=pt-br
