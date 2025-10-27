import * as PetsModel from './../models/petsModel.js';

export const listarTodos = async (req, res) => {
    try {
        const pets = await PetsModel.findAll();

        if (!pets || pets.length === 0) {
            res.status(404).json({
                total: pets.length,
                mensagem: 'Não há pets na lista',
                pets
            })
            
        }

        res.status(200).json({
            total: pets.length,
            mensagem: 'lista de pets',
            pets
        })

    } catch (error) {
    res.status(500).json({ 
        erro: 'erro interno do servidor',
        detalhes: error.message,
        status: 500
       })
    }
}


export const buscarPetPorId = async (req,res) => {
    try {
        const { id } = req.params;
        const pet = await PetsModel.findById(id);

        if (!pet) {
            return res.status(404).json({
                erro: 'Pet não encontrado.',
                mensagem: "Verifique se o ID do pet existe.",
                id: id,
            })
        }

        
        res.status(200).json({
        mensagem: "Pet encontrado com sucesso.",
        pet
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao buscar pet por ID.',
            detalhes: error.message,
            status: 500
        })
    }
}