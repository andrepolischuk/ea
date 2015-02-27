
default: test

test: node_modules $(wildcard test/*.js)
	@node_modules/.bin/mocha test/test.js

clean:
	@rm -rf build.js ea.js ea.min.js components node_modules

node_modules: package.json
	@npm install

bundle: index.js
	@duo --standalone ea --stdout index.js > ea.js
	@uglifyjs ea.js --mangle --compress --output ea.min.js

.PHONY: clean test
