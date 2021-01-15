import kue from 'kue';

const queue = kue.createQueue();
const jobFormat = {
  phoneNumber: 'string',
  message: 'string',
};

const queueName = 'push_notification_code';

const job = queue.create(queueName, jobFormat).save((err) => {
  if (!err) console.log(`Notification job created: ${job.id}`);
});

job.on('complete', () => {
  console.log('Notification job completed');
});

job.on('failed', () => {
  console.log('Notification job failed');
});
