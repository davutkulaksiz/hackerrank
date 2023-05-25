// Aladdin and his Carpet
function optimalPoint(magic, dist) {
    let total = 0;
    let current = 0;
    let start = 0;
    
    for (let i = 0; i < magic.length; i++) {
        total += magic[i] - dist[i]
        current += magic[i] - dist[i]
        
        if(current < 0) {
            start = i + 1;
            current = 0;
        }
    }
    
    if(total < 0) {
        return -1;
    }
    
    return start;
}