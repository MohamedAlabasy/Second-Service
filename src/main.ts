import { MainConfiguration } from 'Shared-Service/src/main-configuration';

async function bootstrap() {
  const { app, config } = await MainConfiguration();

  await app.listen(config.get('PORT'));
}

bootstrap();