
/* Autogenerated file, do not edit! */

/* eslint-disable */
import {
  AztecAddress,
  AztecAddressLike,
  CompleteAddress,
  Contract,
  ContractArtifact,
  ContractBase,
  ContractFunctionInteraction,
  ContractMethod,
  DeployMethod,
  EthAddress,
  EthAddressLike,
  FieldLike,
  Fr,
  Point,
  PublicKey,
  Wallet,
} from '@aztec/aztec.js';
import PrivateOracleContractArtifactJson from '../target/PrivateOracle.json' assert { type: 'json' };
export const PrivateOracleContractArtifact = PrivateOracleContractArtifactJson as ContractArtifact;

/**
 * Type-safe interface for contract PrivateOracle;
 */
export class PrivateOracleContract extends ContractBase {
  
  private constructor(
    completeAddress: CompleteAddress,
    wallet: Wallet,
    portalContract = EthAddress.ZERO
  ) {
    super(completeAddress, PrivateOracleContractArtifact, wallet, portalContract);
  }
  

  
  /**
   * Creates a contract instance.
   * @param address - The deployed contract's address.
   * @param wallet - The wallet to use when interacting with the contract.
   * @returns A promise that resolves to a new Contract instance.
   */
  public static async at(
    address: AztecAddress,
    wallet: Wallet,
  ) {
    return Contract.at(address, PrivateOracleContract.artifact, wallet) as Promise<PrivateOracleContract>;
  }

  
  /**
   * Creates a tx to deploy a new instance of this contract.
   */
  public static deploy(wallet: Wallet, payment_token: AztecAddressLike, fee: FieldLike) {
    return new DeployMethod<PrivateOracleContract>(Point.ZERO, wallet, PrivateOracleContractArtifact, Array.from(arguments).slice(1));
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified public key to derive the address.
   */
  public static deployWithPublicKey(publicKey: PublicKey, wallet: Wallet, payment_token: AztecAddressLike, fee: FieldLike) {
    return new DeployMethod<PrivateOracleContract>(publicKey, wallet, PrivateOracleContractArtifact, Array.from(arguments).slice(2));
  }
  

  
  /**
   * Returns this contract's artifact.
   */
  public static get artifact(): ContractArtifact {
    return PrivateOracleContractArtifact;
  }
  

  /** Type-safe wrappers for the public methods exposed by the contract. */
  public methods!: {
    
    /** cancel_question(question: field) */
    cancel_question: ((question: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** compute_note_hash_and_nullifier(contract_address: field, nonce: field, storage_slot: field, preimage: array) */
    compute_note_hash_and_nullifier: ((contract_address: FieldLike, nonce: FieldLike, storage_slot: FieldLike, preimage: FieldLike[]) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** consult_answer(question: field) */
    consult_answer: ((question: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** get_answer_unconstrained(question: field, note_owner: struct) */
    get_answer_unconstrained: ((question: FieldLike, note_owner: AztecAddressLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** get_answers() */
    get_answers: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** get_fee() */
    get_fee: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** get_payment_token() */
    get_payment_token: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** get_questions() */
    get_questions: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** initialize_payment_token(payment_token: field, fee: field) */
    initialize_payment_token: ((payment_token: FieldLike, fee: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** submit_answer(question: field, requester: struct, answer: field) */
    submit_answer: ((question: FieldLike, requester: AztecAddressLike, answer: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** submit_question(question: field, divinity_address: struct, nonce: field) */
    submit_question: ((question: FieldLike, divinity_address: AztecAddressLike, nonce: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
  };
}
