import { shallow } from 'enzyme';
import Result from '../search/results';

const mock = [
    {
    "DocumentId": "8f09d0d0898e5470189120415158f7b5",
    "DocumentTitle": {
      "Text": "Choose a Child Care Centre",
      "Highlights": [{
        "BeginOffset": 9,
        "EndOffset": 14
      }]
    },
    "DocumentExcerpt": {
      "Text": "...as partners to optimise the child physical, intellectual, emotional and social development. Choosing a Child Care Centre for Your Child In choosing the appropriate child care arrangement, the age and personality of your child are important factors for consideration...",
      "Highlights": [{
        "BeginOffset": 31,
        "EndOffset": 36
      },
        {
          "BeginOffset": 106,
          "EndOffset": 111
        },
        {
          "BeginOffset": 133,
          "EndOffset": 138
        },
        {
          "BeginOffset": 167,
          "EndOffset": 172
        },
        {
          "BeginOffset": 223,
          "EndOffset": 228
        }
      ]
    },
    "DocumentURI": "https://www.ecda.gov.sg/Parents/Pages/ParentsChooseCCC.aspx"
  },
    {
      "DocumentId": "0a055db5880a278d8734750c0925420f",
      "DocumentTitle": {
        "Text": "ICA | Child (aged under 21) of a Singapore Citizen (SC) or Singapore Permanent Resident (PR)",
        "Highlights": [{
          "BeginOffset": 6,
          "EndOffset": 11
        }]
      },
      "DocumentExcerpt": {
        "Text": "...Child (aged under 21) of a Singapore Citizen (SC) or Singapore Permanent Resident (PR) Child (aged under 21) of a Singapore Citizen (SC) or Singapore Permanent Resident (PR) From the foreign child (applicant) Birth Certificate and adoption documents (if any) The applicant recent passport...",
        "Highlights": [{
          "BeginOffset": 3,
          "EndOffset": 8
        },
          {
            "BeginOffset": 90,
            "EndOffset": 95
          },
          {
            "BeginOffset": 194,
            "EndOffset": 199
          }
        ]
      },
      "DocumentURI": "https://www.ica.gov.sg/reside/LTVP/apply/child-(aged-under-21)-of-a-singapore-citizen-(sc)-or-singapore-permanent-resident-(pr)"
    },
    {
      "DocumentId": "053d47aae0b0d65307641cd86e97d06b",
      "DocumentTitle": {
        "Text": "MOH | Child Vaccination",
        "Highlights": [{
          "BeginOffset": 6,
          "EndOffset": 11
        }]
      },
      "DocumentExcerpt": {
        "Text": "...gets better by itself in a week or so Some children may have no side effects. There is nothing to worry about if that is the case for your child. CAN MY CHILD TAKE FEVER/PAIN MEDICINE BEFORE TAKING THE VACCINE? If there are no side effects present, there is no reason to pre-medicate your child...",
        "Highlights": [{
          "BeginOffset": 142,
          "EndOffset": 147
        },
          {
            "BeginOffset": 156,
            "EndOffset": 161
          },
          {
            "BeginOffset": 292,
            "EndOffset": 297
          }
        ]
      },
      "DocumentURI": "https://www.moh.gov.sg/covid-19/vaccination/faqs/faqs---children-related-vaccination-matters"
    },
    {
      "DocumentId": "6f1c56f34f094794d4b2294c49d4db00",
      "DocumentTitle": {
        "Text": "Child health records | LifeSG - Help & Support",
        "Highlights": [{
          "BeginOffset": 0,
          "EndOffset": 5
        }]
      },
      "DocumentExcerpt": {
        "Text": "...below. 2. Select “Healthcare\" under \"Services\" 3. Select \"Check child medical appointments\" or \"View child immunisation records\" to see upcoming or past appointment records I WISH TO CHANGE MY CHILD’S IMMUNISATION APPOINTMENT, CAN I DO SO VIA THE LIFESG APP...",
        "Highlights": [{
          "BeginOffset": 67,
          "EndOffset": 72
        },
          {
            "BeginOffset": 104,
            "EndOffset": 109
          },
          {
            "BeginOffset": 196,
            "EndOffset": 201
          }
        ]
      },
      "DocumentURI": "https://www.life.gov.sg/help-support/childs-health-records"
    },
    {
      "DocumentId": "4795f3eb1c09696102c5e35f7b61365e",
      "DocumentTitle": {
        "Text": "Planning For A Child",
        "Highlights": [{
          "BeginOffset": 15,
          "EndOffset": 20
        }]
      },
      "DocumentExcerpt": {
        "Text": "...and flexibility when making a decision. Find out which Child Care Centre is most convenient for you here . Planning Your Child Education Education is a key pillar of your child life. By planning early, you will be well placed to decide on the best options to finance your child education. Having a...",
        "Highlights": [{
          "BeginOffset": 58,
          "EndOffset": 63
        },
          {
            "BeginOffset": 124,
            "EndOffset": 129
          },
          {
            "BeginOffset": 174,
            "EndOffset": 179
          },
          {
            "BeginOffset": 275,
            "EndOffset": 280
          }
        ]
      },
      "DocumentURI": "https://www.areyouready.gov.sg/YourLifeEvents/Pages/HavingKids-Planning-for-a-child.aspx"
    },
    {
      "DocumentId": "8f593524f5e3eb2796033969c1ab1e8e",
      "DocumentTitle": {
        "Text": "Central Narcotics Bureau of Singapore | Preventive Drug Education Handbook for Parents",
        "Highlights": []
      },
      "DocumentExcerpt": {
        "Text": "...It is important for parents to know about drugs and inhalants and its harmful consequences, so that you can talk to your child and guide your child to stay away from drugs and inhalants. This Handbook aims to empower you with the relevant preventive drug education knowledge, to identify tell...",
        "Highlights": [{
          "BeginOffset": 124,
          "EndOffset": 129
        },
          {
            "BeginOffset": 145,
            "EndOffset": 150
          }
        ]
      },
      "DocumentURI": "https://www.cnb.gov.sg/educational-resources/for-communities/resource-toolkit/preventive-drug-education-handbook-for-parents"
    },
    {
      "Id": "197545c9-7c20-4b7d-af71-b011e849d125-ae2730ea-05a3-4557-9812-257717df6acd",
      "Type": "DOCUMENT",
      "DocumentId": "ae146c8bb3dfc08e31a130fa06531a83",
      "DocumentTitle": {
        "Text": "Advisory to Parents - Keeping Our Children Safe Against COVID-19 - Preschools to suspend general services",
        "Highlights": []
      },
      "DocumentExcerpt": {
        "Text": "...effort of every single person in the preschool community. In the best interest of your child and family, we strongly advise you to keep your child at home during this period and avoid going out unnecessarily, except to purchase daily necessities, essential services, or for urgent medical...",
        "Highlights": [{
          "BeginOffset": 90,
          "EndOffset": 95
        },
          {
            "BeginOffset": 144,
            "EndOffset": 149
          }
        ]
      },
      "DocumentURI": "https://www.ecda.gov.sg/PressReleases/Pages/Advisory-to-Parents-Keeping-Our-Children-Safe-Against-COVID-19-Preschools-to-suspend-general-services.aspx"
    },
    {
      "Id": "197545c9-7c20-4b7d-af71-b011e849d125-19b8f0a7-950c-4061-9ea8-8e8a0259112f",
      "Type": "DOCUMENT",
      "DocumentId": "43d4e2f0041d3945d018972421d99c49",
      "DocumentTitle": {
        "Text": "​Planning ahead for your child education",
        "Highlights": [{
          "BeginOffset": 25,
          "EndOffset": 30
        }]
      },
      "DocumentExcerpt": {
        "Text": "...PLANNING AHEAD FOR YOUR CHILD'S EDUCATION Planning ahead for your child education PLANNING AHEAD FOR YOUR CHILD'S EDUCATION Do you know how much to set aside? Find out the cost of university education, how to save for this and where to...",
        "Highlights": [{
          "BeginOffset": 27,
          "EndOffset": 32
        },
          {
            "BeginOffset": 69,
            "EndOffset": 74
          },
          {
            "BeginOffset": 109,
            "EndOffset": 114
          }
        ]
      },
      "DocumentURI": "https://www.moneysense.gov.sg/articles/2018/10/planning-ahead-for-your-childs-education?sc_lang=en"
    },
    {
      "Id": "197545c9-7c20-4b7d-af71-b011e849d125-afe12cc3-dd09-4fff-ab6f-c20610f30ac0",
      "Type": "DOCUMENT",
      "DocumentId": "95be3a341251d02df0fa4ccb57143b6a",
      "DocumentTitle": {
        "Text": "Planning your finances when having and raising children",
        "Highlights": []
      },
      "DocumentExcerpt": {
        "Text": "...as a parent. The cost can be hefty. Apart from school or tuition fees, you have to factor in living expenses if you are planning to send your child overseas. The cost can be daunting if you do not prepare or plan ahead. See also: Planning ahead for your child university education...",
        "Highlights": [{
          "BeginOffset": 145,
          "EndOffset": 150
        },
          {
            "BeginOffset": 257,
            "EndOffset": 262
          }
        ]
      },
      "DocumentURI": "https://www.moneysense.gov.sg/articles/2018/10/planning-your-finances-when-having-and-raising-children?sc_lang=en"
    },
    {
      "Id": "197545c9-7c20-4b7d-af71-b011e849d125-fe23364e-ab8a-472f-9239-443d47b3c461",
      "Type": "DOCUMENT",
      "DocumentId": "017357cb72bc3fc5ebccccb9af1b0600",
      "DocumentTitle": {
        "Text": "HPB Introduces BMI-for-Age Charts to Monitor Physical Growth and Development in Children and Youth",
        "Highlights": []
      },
      "DocumentExcerpt": {
        "Text": "...age by comparing the child s BMI to a reference population of children of the same age and gender. 3 Apart from providing an indication of how a child s growth and development compares with that of his or her peers, the BMI-for-age charts also identifies the child s weight status and its...",
        "Highlights": [{
          "BeginOffset": 24,
          "EndOffset": 29
        },
          {
            "BeginOffset": 148,
            "EndOffset": 153
          },
          {
            "BeginOffset": 262,
            "EndOffset": 267
          }
        ]
      },
      "DocumentURI": "https://www.hpb.gov.sg/article/hpb-introduces-bmi-for-age-charts-to-monitor-physical-growth-and-development-in-children-and-youth"
    }
  ];

describe('Search Result Component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Result lists={mock} />);
    expect(wrapper).toBe(wrapper);
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});
