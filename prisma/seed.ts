import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash('admin', 10);
  
  const admin = await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: hashedPassword,
      isAdmin: true,
    },
  });
  
  console.log({ admin });
  
  // Create some sample contact messages
  const message1 = await prisma.contactMessage.create({
    data: {
      name: 'John Doe',
      email: 'john@example.com',
      service: 'live-performance',
      message: 'I would like to book you for a private event next month. Please let me know your availability.',
      read: false,
      archived: false,
    },
  });
  
  const message2 = await prisma.contactMessage.create({
    data: {
      name: 'Jane Smith',
      email: 'jane@example.com',
      service: 'mixing-mastering',
      message: 'I have a track that needs professional mixing and mastering. Can you provide a quote?',
      read: true,
      archived: false,
    },
  });
  
  console.log({ message1, message2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
