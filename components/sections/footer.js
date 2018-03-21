import Section from '../section'
import Grid, { Column } from '../grid'
const Input = () => <input />
export default () => (
  <Section>
    <Grid>
      <Column>Wulkano & friends</Column>
      <Column>
        <ul>
          <li>Download</li>
          <li>Issues</li>
          <li>License</li>
        </ul>
      </Column>
      <Column>
        <p>Sign up for updates</p>
        <form onSubmit={() => alert('not implemented yet')}>
          <Input />
        </form>
      </Column>
    </Grid>
  </Section>
)
