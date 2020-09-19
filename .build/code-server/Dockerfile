FROM linuxserver/code-server

ENV TZ=America/Toronto
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# -== Install Dependencies for Compile -==
WORKDIR /home
RUN apt-get update -y && \
    # For PHP
    apt install php-cli php-fpm composer -y && \
    apt-get install php-dev autoconf automake wget -y && \
    service php7.2-fpm start && \
    # For Java
    apt-get install default-jre default-jdk -y && \
    # For .NET Core
    wget https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb && \
    dpkg -i packages-microsoft-prod.deb && \
    apt-get update -y && \
    apt-get install -y apt-transport-https && \
    apt-get update -y && \
    apt-get install -y dotnet-sdk-3.1 && \
    apt-get update -y && \
    apt-get install -y aspnetcore-runtime-3.1 && \
    mkdir /debug 




# -== Install & Setup Debuggers -==
# For PHP
WORKDIR /home
RUN curl -O http://xdebug.org/files/xdebug-2.9.6.tgz && \
    tar -xvzf xdebug-2.9.6.tgz && \
    cd xdebug-2.9.6 && \
    phpize && \
    ./configure && \
    make && \
    cp modules/xdebug.so /usr/lib/php/20170718 && \
    echo "zend_extension = /usr/lib/php/20170718/xdebug.so" >> /etc/php/7.2/cli/php.ini && \
    echo "[XDebug]" >> /etc/php/7.2/cli/php.ini && \
    echo "xdebug.remote_enable = 1" >> /etc/php/7.2/cli/php.ini && \
    echo "xdebug.remote_autostart = 1" >> /etc/php/7.2/cli/php.ini

# For .NET Debugger
WORKDIR /debug
RUN curl -sL https://github.com/Samsung/netcoredbg/releases/download/latest/netcoredbg-linux-master.tar.gz | tar -zx -C /debug
ENV PATH "${PATH}:/debug/netcoredbg"
ENV DOTNET_CLI_TELEMETRY_OPTOUT "true"
ENV MSBuildSDKsPath "/usr/share/dotnet/sdk/3.1.402/Sdks"
ENV PATH "${PATH}:${MSBuildSDKsPath}"

# For Oracle DB
RUN apt-get install -y dotnet-runtime-2.1