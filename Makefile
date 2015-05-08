all: lint

lint:
	jshint js/main.js
	jsonlint --quiet manifest.json

commit: lint
	git commit -a

push:
	git push -u --tags origin master

.PHONY: all lint commit push
