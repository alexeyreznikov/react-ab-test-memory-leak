# Reproduce this memory leak
1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm start`
4. Run `ab -c 20 -n 100000 -k http://127.0.0.1:3000/`
5. To watch how memory will be increase in `htop`. And after ab test finished, the memory won't be cleared.
