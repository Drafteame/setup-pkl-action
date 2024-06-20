FROM node:20-alpine

# LABEL "com.github.actions.icon"=""
# LABEL "com.github.actions.color"=""
# LABEL "com.github.actions.name"=""
# LABEL "com.github.actions.description"=""
# LABEL "org.opencontainers.image.source"=""

COPY . /action
WORKDIR /action

RUN npm install --omit=dev

ENTRYPOINT ["node", "/action/index.js"]