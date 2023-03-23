export default function handler(req, res) {
    if(req.method == "GET"){
        res.status(200).json({ text: 'Hello GET' });
    }else if(req.method == "POST"){
        //req.body
        //req.query
        res.status(200).json({ text: 'Hello POST' });
    }else{
        res.status(200).json({ text: 'Hello Other' });
    }
}