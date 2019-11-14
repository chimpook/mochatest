Install:
$ npm init

Then change test section in package.js - set mocha.

$ npm install mocha chai --save-dev

Запуск:

$ npm run test

Запуск в режима слежения:

$ npm t -- --watch
t - сокращение от test
-- - означает, что дальнейшие параметры относятся не к npm, а к пакету, запускаемому внутри (т.е. к mocha)

