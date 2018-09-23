import Section from '../section'
import Grid, { Column } from '../../grid'
import WulkanoAndFriends from './wulkano-and-friends'
import Links from './links'

export default () => (
  <Section style={{ marginTop: '128px' }}>
    <Grid>
      <Column>
        <WulkanoAndFriends />
      </Column>
      <Column>
        <Links />
      </Column>
    </Grid>
  </Section>
)
