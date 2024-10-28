// src/app/api/auth/register.ts
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import prisma from '@/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, address, gender, password, confirmpassword } = req.body;

    if (password !== confirmpassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) return res.status(400).json({ error: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        address,
        gender,
        password: hashedPassword,
        confirmpassword: hashedPassword,
      },
    });

    res.status(201).json({ message: 'User created successfully', user: { id: user.id, email: user.email } });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
