import {Request, Response} from 'express';

interface Empire {
    name: string
}

// getting all posts
const getEmpire = async (req: Request, res: Response) => {
    const empire: Empire = {
        name: ''
    }
    empire.name = req.body.name
    res.send
};


export default {getEmpire}