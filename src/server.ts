import fastify from "fastify";
import { createTrip } from "./routes/create-trip";
import { confirmParticipants } from "./routes/confirm-participant";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { confirmTrip } from "./routes/confirm-trip";
import cors from '@fastify/cors'
import { createActivity } from "./routes/create-activity";
import { getActivities } from "./routes/get-activities";
import { createLink } from "./routes/create-link";
import { getLinks } from "./routes/get-links";
import { getParticipants } from "./routes/get-participants";
import { createInvite } from "./routes/create-invite";
import { updateTrip } from "./routes/update-trip";
import { getTripDetails } from "./routes/get-trip-details";
import { errorHandler } from "./error-handler";
import { env } from "./env";
import { listTrip } from "./routes/list-trip";

const app = fastify()

app.register(cors)

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.setErrorHandler(errorHandler)

app.register(listTrip)
app.register(createTrip)
app.register(confirmTrip)
app.register(confirmParticipants)
app.register(createActivity)
app.register(getActivities)
app.register(createLink)
app.register(getLinks)
app.register(getParticipants)
app.register(createInvite)
app.register(updateTrip)
app.register(getTripDetails)

app.listen({ port: env.PORT }).then(() => {
  console.log(`Server running at port ${env.PORT}`)
})