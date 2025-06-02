import express from 'express';
import Users from '../models/Users';

export const getUser = async (_req: express.Request, res: express.Response) => {
  const users = await Users.findAll();
  return res.status(200).json(users);
};

export const addUser = async (req: express.Request, res: express.Response) => {
  const { name, email, password, phone } = req.body;

  // Validate required fields
  if (!name || !email || !password) {
    return res.status(400).json({
      message: 'Missing required fields',
      required: ['name', 'email', 'password'],
    });
  }

  try {
    const user = await Users.create({
      name,
      email,
      password,
      phone,
    });

    return res.status(201).json(user);
  } catch (error: unknown) {
    if (error instanceof Error && error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({
        message: 'Email already exists',
        field: 'email',
      });
    }
    console.error('Error creating user:', error);
    return res.status(500).json({
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

export const updateUser = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const { name, email } = req.body;

  // Validate required fields
  if (!name && !email) {
    return res.status(400).json({
      message: 'At least one field is required to update',
      fields: ['name', 'email'],
    });
  }

  try {
    const user = await Users.findByPk(Number(id));
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (name) user.name = name;
    if (email) user.email = email;

    await user.save();
    return res.status(200).json(user);
  } catch (error: unknown) {
    if (error instanceof Error && error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({
        message: 'Email already exists',
        field: 'email',
      });
    }
    console.error('Error updating user:', error);
    return res.status(500).json({
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};
