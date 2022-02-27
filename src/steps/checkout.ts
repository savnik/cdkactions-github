import { StepsProps } from "cdkactions";

const step: StepsProps = {
  uses: "actions/checkout@v2",
  with: {
    token: "${{ steps.generate_token.outputs.token }}",
  },
};

export default step;
