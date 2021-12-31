import {
  Alert,
  AlertTitle,
  Button,
  ButtonGroup,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material";
import { useState } from "react";
import agent from "../../app/api/agent";

const AboutPage = () => {
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  function getValidationError() {
    agent.TestErrors.getValidationError()
      .then(() => console.log("this should work"))
      .catch((e) => setValidationErrors(e));
  }

  return (
    <Container>
      <Typography gutterBottom variant="h2">
        Errors for testing purposes
      </Typography>
      <ButtonGroup fullWidth>
        <Button variant="contained" onClick={agent.TestErrors.get400Error}>
          Test 400 Error
        </Button>
        <Button variant="contained" onClick={agent.TestErrors.get401Error}>
          Test 401 Error
        </Button>
        <Button variant="contained" onClick={agent.TestErrors.get404Error}>
          Test 404 Error
        </Button>
        <Button variant="contained" onClick={agent.TestErrors.get500Error}>
          Test 500 Error
        </Button>
        <Button variant="contained" onClick={getValidationError}>
          Test Validation Error
        </Button>
      </ButtonGroup>
      {validationErrors.length > 0 && (
        <Alert security="error">
          <AlertTitle>Validation Errors</AlertTitle>
          <List>
            {validationErrors.map((e) => (
              <ListItem key={e}>
                <ListItemText>{e}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Alert>
      )}
    </Container>
  );
};

export default AboutPage;
