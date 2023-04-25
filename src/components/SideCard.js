import { Button, UncontrolledAlert, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
const BANNER = "https://media.tenor.com/MR7k-TyLM7wAAAAi/zebnat-dizzy.gif";
const SideCard = () => (
  <>
    <Card>
      <CardImg top width="100%" src={BANNER} alt="banner" />
      <CardBody>
        <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">
          Lee Gabrielle Banquil
        </CardTitle>
        <CardSubtitle
          className="text-secondary mb-3 font-weight-light text-uppercase"
          style={{ fontSize: "0.8rem" }}
        >
          Southeast Asia, Planet Earth
        </CardSubtitle>
        <CardText
          className="text-secondary mb-4"
          style={{ fontSize: "0.75rem" }}
        >
          Artist in denial
        </CardText>
        <Button color="success" className="font-weight-bold">
          View Profile
        </Button>
      </CardBody>
    </Card>
  </>
);
export default SideCard;