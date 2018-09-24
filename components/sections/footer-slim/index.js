import Section from '../section'
import Grid, { Column } from '../../grid'
import WulkanoAndFriends from './wulkano-and-friends'
import Links from './links'

export default () => (
  <Section>
    <Grid style={{ marginBottom: 0 }}>
      <Column>
        <WulkanoAndFriends />
      </Column>
      <Column>
        <Links />
      </Column>
    </Grid>
  </Section>
)
