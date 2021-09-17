module.exports = {
    name: "ready",
    run: (client) => {
        console.log(`${client.user.username} ahora está conectado!`)
        setInterval(async () => {
          client.user.setPresence({ activity: { name: `momento antiraid`, type: 'STREAMING' }, status: 'idle' })
        }, 5000)
        
    } 
};
