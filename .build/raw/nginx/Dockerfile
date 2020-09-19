FROM nginx:latest

# Add files from build folder to container
ADD my.types /etc/nginx/my.types
ADD default.conf /etc/nginx/conf.d/default.conf

# Symlink data to exposed folder
RUN ln -s /data/code-volume/workspace /var/www




