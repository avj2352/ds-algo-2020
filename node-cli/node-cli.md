## Interactive Command Line Interface using Node

### Permission on Macbook (zsh terminal)

To give default permission to your node js file to be run as a Super user

```bash
# Provide Super user privilages to your script - mycli.js
chmod +x mycli.js
```

### Add a Shebang to default run as a script

You can provide a Shebang on top of your node js script for it to run as default node program

```javascript
#!/usr/bin/env node

console.log('Hello World');
```

