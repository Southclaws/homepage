VERSION := $(shell git rev-parse --short HEAD)

.PHONY: build

build:
	docker build -t southclaws/homepage:$(VERSION) \
		--build-arg app_env=production \
		.

push:
	docker push southclaws/homepage:$(VERSION)
	docker tag southclaws/homepage:$(VERSION) southclaws/homepage:latest
	docker push southclaws/homepage:latest

run:
	-docker kill homepage
	-docker rm homepage
	docker run \
		--name homepage \
		-p 3000:3000 \
		-d \
		southclaws/homepage:$(VERSION)

run-prod:
	-docker kill homepage
	-docker rm homepage
	docker run \
		--name homepage \
		--restart on-failure \
		-p 7780:3000 \
		-d \
		southclaws/homepage:$(VERSION)
