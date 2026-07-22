// Azure Blob Storage helper
const { BlobServiceClient } = require('@azure/storage-blob');

exports.getBlobClient = () =>
  BlobServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING);
