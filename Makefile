JS = js/main.js

all: lint

lint:
	jshint $(JS)
	jsonlint --quiet manifest.json

commit: lint
	git commit -a

push:
	git push -u --tags origin master

.PHONY: all lint commit push
