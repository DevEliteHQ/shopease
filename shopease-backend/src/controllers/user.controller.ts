import express from 'express';
import Users from '../models/Users';

export const getUser = async (_req: express.Request, res: express.Response) => {
  const users = await Users.findAll();
  return res.status(200).json(users);
};

export const addUser = async (req: express.Request, res: express.Response) => {
  const { name, email, password, phone } = req.body;
  try {
    const user = await Users.create({
      name,
      email,
      password,
      phone,
    });

    return res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateUser = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const user = await Users.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (name) user.name = name;
    if (email) user.email = email;

    await user.save();
    return res.status(200).json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
