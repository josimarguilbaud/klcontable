# Build (node) -> serve (nginx), el mismo patrón que las webs de San Blas.
#
# A diferencia de aquellas, aquí el contexto de build SÍ es la raíz del repo:
# klcontable no tiene web hermana y por tanto no hay guardián anti-canibalización
# que necesite leer carpetas de al lado. En Coolify: base_directory `/`,
# dockerfile_location `/Dockerfile`.
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
