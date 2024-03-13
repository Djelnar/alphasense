#!make

test: build-test run-test
prod: build-prod run-prod

build-test:
	docker compose -f docker-compose.test.yml build
run-test:
	docker compose -f docker-compose.test.yml up
build-prod:
	docker compose -f docker-compose.yml build
run-prod:
	docker compose -f docker-compose.yml up
