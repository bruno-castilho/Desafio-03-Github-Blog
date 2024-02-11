import { ArrowSquareOut } from 'phosphor-react'
import avatar from '../../assets/avatar.svg'
import {
  Avatar,
  Filter,
  Info,
  ProfileContainer,
  Publication,
  Publications,
  User,
} from './styles'

import github from '../../assets/github.svg'
import company from '../../assets/company.svg'
import followers from '../../assets/followers.svg'

export function Home() {
  return (
    <>
      <ProfileContainer>
        <Avatar src={avatar} alt="" />
        <div>
          <User>
            <strong>Cameron Williamson</strong>
            <a href="">
              <span>github</span>
              <ArrowSquareOut weight="bold" />
            </a>
          </User>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <Info>
            <div>
              <img src={github} alt="" />
              <span>cameronwll</span>
            </div>
            <div>
              <img src={company} alt="" />
              <span>Rocketseat</span>
            </div>
            <div>
              <img src={followers} alt="" />
              <span>32 seguidores</span>
            </div>
          </Info>
        </div>
      </ProfileContainer>
      <section style={{ marginTop: '72px' }}>
        <Filter>
          <div>
            <label htmlFor="">Publicações</label>
            <span>6 publicações</span>
          </div>
          <input type="text" placeholder="Buscar conteúdo" />
        </Filter>

        <Publications>
          <Publication>
            <div>
              <h3>JavaScript data types and data structures</h3>
              <span>Há 1 dia</span>
            </div>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </p>
          </Publication>
          <Publication>
            <div>
              <h3>JavaScript data types and data structures</h3>
              <span>Há 1 dia</span>
            </div>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </p>
          </Publication>
          <Publication>
            <div>
              <h3>JavaScript data types and data structures</h3>
              <span>Há 1 dia</span>
            </div>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </p>
          </Publication>
          <Publication>
            <div>
              <h3>JavaScript data types and data structures</h3>
              <span>Há 1 dia</span>
            </div>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </p>
          </Publication>
        </Publications>
      </section>
    </>
  )
}
